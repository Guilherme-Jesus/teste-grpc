#!/bin/bash
# mkdir -p ./src/proto
# protoc -I=. ./proto/*.proto \
#   --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web \
#   --js_out=import_style=commonjs:./src \
#   --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src



OUT="src/proto" # Diretório de saída para os arquivos gerados dentro de src
PROTO_DIR="proto" # Diretório onde os arquivos .proto estão localizados
PROTO_API="${PROTO_DIR}/area.proto" # Caminho para o arquivo .proto

# Criar o diretório de saída se ele não existir
mkdir -p $OUT

# Verifica se o diretório e o arquivo .proto existem
if [ ! -d "$PROTO_DIR" ] || [ ! -f "$PROTO_API" ]; then
    echo "Diretório ou arquivo .proto não encontrado!"
    exit 1
fi

# Executa o protoc
protoc -I=$PROTO_DIR $PROTO_API \
    --js_out=import_style=commonjs,binary:$OUT \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT

# Processa os arquivos gerados
GENERATED_FILES="${OUT}/*"
for f in $GENERATED_FILES
do
  if [ -f "$f" ]; then
    echo "Processando $f..."
    # Adiciona "/* eslint-disable */" no início do arquivo
    echo "/* eslint-disable */" | cat - $f > temp && mv temp $f
  fi
done

echo "Stubs gRPC-Web gerados com sucesso."