const Modal = () => {
  return (
    <div>
      <dialog id="details_modal" className="modal modal-middle">
        <div className="modal-box">
          <form className="space-y-4">
            <div className="form-control space-y-2">
              <label className="font-bold">First Name: </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered input-accent w-full"
              />
            </div>

            <div className="form-control space-y-2">
              <label className="font-bold">Last Name: </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div className="form-control space-y-2">
              <label className="font-bold">Email: </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div className="form-control space-y-2">
              <label className="font-bold">Phone Number: </label>
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div className="form-control space-y-2">
              <label className="font-bold">Appointment Date: </label>
              <input
                type="date"
                name="appointment"
                placeholder="Appointment Date"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div className="form-control space-y-2">
              <label className="font-bold">Address: </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered input-accent w-full"
              />
            </div>

            <button className="btn btn-accent w-full text-white font-semibold" type="submit">Make Appointment</button>
          </form>
          <div className="modal-action block">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error w-full text-white font-bold">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;