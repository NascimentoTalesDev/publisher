import React, { useState } from "react";
import axios from "axios";
import { UploadCloud, X } from "lucide-react";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { cn } from "./lib/utils";
import Image from "next/image";

const UploadFiles = ({ onChange }) => {
  const [image, setImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  async function uploadImages(ev) {
    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", ev.target.files[0]);

      const response = await axios.post("/api/upload-images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setImage(response?.data?.fileName);

      onChange(response?.data?.fileName);
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
    setIsUploading(false);
  }

  function deleteImage() {
    setImage("");
    onChange("");
  }

  return (
    <div className={cn("h-10 w-full border bg-white rounded-[6px]")}>
      {image ? (
        <div className="flex items-center overflow-hidden h-full w-full">
          <Image src={image} height={46} width={200} alt="" />
          <X
            onClick={deleteImage}
            className="cursor-pointer bg-red-500 w-full h-full"
          />
        </div>
      ) : (
        <>
          {isUploading ? (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <label className="cursor-pointer h-full w-full">
              <div className="h-full w-full flex  items-center justify-center ">
                <div>
                  <UploadCloud />
                </div>
                <div>Upload</div>
              </div>
              <input
                onChange={uploadImages}
                type="file"
                className="hidden"
              ></input>
            </label>
          )}
        </>
      )}
    </div>
  );
};

export default UploadFiles;
