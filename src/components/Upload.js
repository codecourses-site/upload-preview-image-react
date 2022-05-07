import { useRef, useState } from "react";

const Upload = () => {
  const [avatar, setAvatar] = useState(null);

  const filepickerRef = useRef();

  const uploadAvatar = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setAvatar(readerEvent.target.result);
    };
  };

  return (
    <div className="upload__wrapper">
      <div className="upload__container">
        {!avatar && (
          <div
            className="upload__placeholder"
            onClick={() => filepickerRef.current.click()}
          >
            <span>Upload</span>
          </div>
        )}
        {avatar && (
          <img
            className="upload__content"
            src={avatar}
            alt="img"
            onClick={() => filepickerRef.current.click()}
          />
        )}
        <input hidden onChange={uploadAvatar} ref={filepickerRef} type="file" />
      </div>
    </div>
  );
};

export default Upload;
