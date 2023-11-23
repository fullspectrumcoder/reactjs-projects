import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  objectfit: "cover",
};

const Testing = () => {
  const [images, setImages] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: async (acceptedFiles) => {
      let imageData = [];
      for (let i = 0; i < acceptedFiles.length; i++) {
        let res = await toBase64(acceptedFiles[i]);

        if (res) {
          const resized = await reduce_image_file_size(res);
          let data = { preview: resized };
          imageData.push(data);
        } else {
          console.log("return err");
        }
      }
      if (imageData) {
        setImages(imageData);
        console.log(imageData);
      }
    },
  });

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const reduce_image_file_size = async (
    base64Str,
    MAX_WIDTH = 450,
    MAX_HEIGHT = 450
  ) => {
    let resized_base64 = await new Promise((resolve) => {
      let img = new Image();
      img.src = base64Str;
      img.onload = () => {
        let canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL());
      };
    });
    return resized_base64;
  };

  //   const imageChange = async (e) => {
  //     let file = e.target.files;
  //     let arrayFiles = Array.from(file);
  //     let imageData = [];
  //     for (let i = 0; i < arrayFiles.length; i++) {
  //       let res = await toBase64(arrayFiles[i]);
  //       let data = { preview: res };
  //       imageData.push(data);
  //     }

  //     if (imageData) {
  //       setImages(imageData);
  //       console.log(imageData);
  //     }
  //   };

  const thumbs = images.map((file, index) => (
    <div style={thumb} key={index}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  return (
    // <div>
    //   <MDBInput
    //     type={"file"}
    //     multiple
    //     onChange={imageChange}
    //     accept="image/png , image/jpeg"
    //   />
    //   {images.map((img, i) => {
    //     return <img src={img.preview} alt="" key={i} />;
    //   })}
    // </div>

    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
};

export default Testing;
