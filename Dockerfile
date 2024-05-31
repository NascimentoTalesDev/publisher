# Estágio 1: Construir a aplicação
FROM node:latest AS builder

WORKDIR /tmp/next

# Copiar package.json e package-lock.json primeiro para melhor cache
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Verificar versão do Node e NPM
RUN node -v
RUN npm -v

# Construir a aplicação
RUN npm run build

# Estágio 2: Criar a imagem final
FROM node:latest

# Definir o diretório de trabalho
WORKDIR /var/www/html

# Copiar os arquivos construídos do estágio builder
COPY --from=builder /tmp/next/.next ./.next
COPY --from=builder /tmp/next/public ./public
COPY --from=builder /tmp/next/package*.json ./

# Instalar apenas dependências de produção
RUN npm install --only=production

# Expor a porta em que a aplicação será executada
EXPOSE 3000

# Iniciar a aplicação
CMD [ "npm", "start" ]
