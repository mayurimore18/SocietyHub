import "./PhotoUpload.css";
import { ImagePlus, Trash2 } from "lucide-react";
import { useRef } from "react";

function PhotoUpload({
  photo,
  setPhoto
}) {

  const inputRef = useRef(null);

  const handlePhoto = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setPhoto(url);

  };

  return (

    <div className="photo-card">

      <div className="photo-header">

        <ImagePlus size={20} />

        <h2>

          Visitor Photograph

        </h2>

      </div>

      {

        photo ?

        (

          <div className="photo-preview">

            <img
              src={photo}
              alt="visitor"
            />

            <div className="photo-buttons">

              <button

                onClick={()=>inputRef.current.click()}

                className="change-btn"

              >

                Change Photo

              </button>

              <button

                className="remove-btn"

                onClick={()=>setPhoto(null)}

              >

                <Trash2 size={16}/>

                Remove

              </button>

            </div>

          </div>

        )

        :

        (

          <div

            className="upload-area"

            onClick={()=>inputRef.current.click()}

          >

            <ImagePlus size={46}/>

            <h3>

              Upload Visitor Photo

            </h3>

            <p>

              Click here to upload image

            </p>

          </div>

        )

      }

      <input

        type="file"

        ref={inputRef}

        hidden

        accept="image/*"

        onChange={handlePhoto}

      />

    </div>

  );

}

export default PhotoUpload;