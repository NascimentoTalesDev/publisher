import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import mime from "mime-types"

const bucketName = "publisher";

const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_KEY_ID,
  }
});

async function uploadFilesToS3(file, fileName) {
    const fileBuffer = file;

    const ext = fileName.split(".").pop();
    const newFileName = Date.now() + "." + ext;  

    try {
      const sendR2 = await r2.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: newFileName,
          Body: fileBuffer,
          ContentType: mime.lookup(fileName),
        })
      );
      const link = `https://pub-a3eb6ecc47d545adb4242f0c2269de37.r2.dev/${newFileName}`;
      return link;
    } catch (error) {
      console.log(error);
    }
}

export async function POST(req, res) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    console.log("AQUI");

    const fileName = await uploadFilesToS3(buffer, file.name);
    console.log(fileName, "FILENAME");

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    return NextResponse.json({ error: "Error uploading file" });
  }
}

export async function DELETE(req, res) {
  console.log("REQ", req);
  try {
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error ao deletar arquivo" });
  }
}
