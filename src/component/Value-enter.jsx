function InputPart() {
  return (
    <div class="container marginown">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter todo" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success inbut">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputPart;
