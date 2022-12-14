const FormBody = ({ formData, setFormData, geolocationEnabled }) => {
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    latitude,
    longitude,
  } = formData;

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    if (e.target.files) {
      setFormData((prevState) => ({ ...prevState, images: e.target.files }));
    }

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  return (
    <>
      <label className="formLabel"> Sell / Rent</label>
      <div className="formButtons">
        <button
          type="button"
          className={type === "sale" ? "formButtonActive" : "formButton"}
          id="type"
          value="sale"
          onClick={onMutate}
        >
          Sell
        </button>
        <button
          type="button"
          className={type === "rent" ? "formButtonActive" : "formButton"}
          id="type"
          value="rent"
          onClick={onMutate}
        >
          Rent
        </button>
      </div>

      <label className="formLabel">Name</label>
      <input
        className="formInputName"
        type="text"
        id="name"
        value={name}
        onChange={onMutate}
        maxLength="32"
        minLength="5"
        required
      />

      <div className="formRooms flex">
        <div>
          <label className="formLabel">Bedrooms</label>
          <input
            className="formInputSmall"
            type="number"
            id="bedrooms"
            value={bedrooms}
            onChange={onMutate}
            min="1"
            max="50"
            required
          />
        </div>
        <div>
          <label className="formLabel">Bathrooms</label>
          <input
            className="formInputSmall"
            type="number"
            id="bathrooms"
            value={bathrooms}
            onChange={onMutate}
            min="1"
            max="50"
            required
          />
        </div>
      </div>

      <label className="formLabel">Parking spot</label>
      <div className="formButtons">
        <button
          className={parking ? "formButtonActive" : "formButton"}
          type="button"
          id="parking"
          value={true}
          onClick={onMutate}
          min="1"
          max="50"
        >
          Yes
        </button>
        <button
          className={
            !parking && parking !== null ? "formButtonActive" : "formButton"
          }
          type="button"
          id="parking"
          value={false}
          onClick={onMutate}
        >
          No
        </button>
      </div>

      <label className="formLabel">Furnished</label>
      <div className="formButtons">
        <button
          className={furnished ? "formButtonActive" : "formButton"}
          type="button"
          id="furnished"
          value={true}
          onClick={onMutate}
        >
          Yes
        </button>
        <button
          className={
            !furnished && furnished !== null ? "formButtonActive" : "formButton"
          }
          type="button"
          id="furnished"
          value={false}
          onClick={onMutate}
        >
          No
        </button>
      </div>

      <label className="formLabel">Address</label>
      <textarea
        className="formInputAddress"
        type="text"
        id="address"
        value={address}
        onChange={onMutate}
        required
      />

      {!geolocationEnabled && (
        <div className="formLatLng flex">
          <div>
            <label className="formLabel">Latitude</label>
            <input
              className="formInputSmall"
              type="number"
              id="latitude"
              value={latitude}
              onChange={onMutate}
              required
            />
          </div>
          <div>
            <label className="formLabel">Longitude</label>
            <input
              className="formInputSmall"
              type="number"
              id="longitude"
              value={longitude}
              onChange={onMutate}
              required
            />
          </div>
        </div>
      )}

      <label className="formLabel">Offer</label>
      <div className="formButtons">
        <button
          className={offer ? "formButtonActive" : "formButton"}
          type="button"
          id="offer"
          value={true}
          onClick={onMutate}
        >
          Yes
        </button>
        <button
          className={
            !offer && offer !== null ? "formButtonActive" : "formButton"
          }
          type="button"
          id="offer"
          value={false}
          onClick={onMutate}
        >
          No
        </button>
      </div>

      <label className="formLabel">Regular Price</label>
      <div className="formPriceDiv">
        <input
          className="formInputSmall"
          type="number"
          id="regularPrice"
          value={regularPrice}
          onChange={onMutate}
          min="50"
          max="750000000"
          required
        />
        {type === "rent" && <p className="formPriceText">$ / Month</p>}
      </div>

      {offer && (
        <>
          <label className="formLabel">Discounted Price</label>
          <input
            className="formInputSmall"
            type="number"
            id="discountedPrice"
            value={discountedPrice}
            onChange={onMutate}
            min="50"
            max="750000000"
            required={offer}
          />
        </>
      )}

      <label className="formLabel">Images</label>
      <p className="imagesInfo">The first image will be the cover (max 6).</p>
      <input
        className="formInputFile"
        type="file"
        id="images"
        onChange={onMutate}
        max="6"
        accept=".jpg,.png,.jpeg"
        multiple
        required
      />
     
    </>
  );
};

export default FormBody;
