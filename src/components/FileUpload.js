import React, { useRef, useState } from "react";
import { CircularProgress, Icon, Fab } from "@material-ui/core";

const initialState = {
  isLoading: false,
  imageName: "",
  imagePreview: null,
  imageSize: 0
};

const FileUpload = () => {
  const [state, setState] = useState(initialState);
  const uploadInputEl = useRef(null);

  const handleUploadChange = async ({ target: { files } }) => {
    setState(prevState => ({ ...prevState, isLoading: true }));

    const file = files[0];
    await new Promise(res => {
      setTimeout(() => {
        res(
          setState(prevState => ({
            ...prevState,
            imageName: file.name,
            imagePreview: URL.createObjectURL(file),
            imageSize: file.size,
            isLoading: false
          }))
        );
      }, 2000);
    });
  };

  const resetUpload = () => {
    setState(initialState);
    uploadInputEl.current.value = null;
  };

  const uploadImage = async () => {
    if (state.imagePreview)
      setState(prevState => ({ ...prevState, isLoading: true }));

    await new Promise(res => {
      setTimeout(() => {
        //res(alert(JSON.stringify(state, null, 4)));
        resetUpload();
      }, 2000);
    });
  };

  const { imagePreview, imageName, imageSize, isLoading } = state;

  return (
    <div style={{ padding: 20 }}>
      <div style={{ textAlign: "center" }}>
        <div>
          <input
            accept="image/jpeg,image/gif,image/png"
            className="hidden"
            id="button-file"
            type="file"
            ref={uploadInputEl}
            onChange={handleUploadChange}
          />
          <label htmlFor="button-file">
            <div>
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Avatar"
                    style={{ margin: "0 auto", maxHeight: 150 }}
                  />
                  <p style={{ margin: "10px 0" }}>
                    ({imageName} - {(imageSize / 1024000).toFixed(2)}MB)
                  </p>
                </>
              ) : (
                <Icon fontSize="large" color="primary" className="cloud-icon">
                  cloud_upload
                </Icon>
              )}
            </div>
          </label>
          <Fab
            variant="extended"
            size="large"
            color="primary"
            aria-label="add"
            className=""
            type="button"
            onClick={uploadImage}
          >
            {isLoading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Submit"
            )}
          </Fab>
          {imagePreview && (
            <Fab
              variant="extended"
              size="large"
              color="default"
              aria-label="add"
              className=""
              type="button"
              onClick={resetUpload}
            >
              Cancel
            </Fab>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
