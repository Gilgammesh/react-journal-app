export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dsyzpl652/upload";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "react-journal-app");

  const options = {
    method: "POST",
    body: formData,
  };

  let imgUrl = null;

  await fetch(cloudUrl, options)
    .then((res) => res.json())
    .then((data) => {
      imgUrl = data.url;
    })
    .catch((error) => {
      console.log("Error", error);
    });

  return imgUrl;
};
