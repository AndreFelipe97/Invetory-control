import { Card } from "../components/card";

export default function Register() {
  return (
    <Card header="Register">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group has-success">
        <label className="form-label mt-4" htmlFor="inputValid">
          Valid input
        </label>
        <input
          type="text"
          value="correct value"
          className="form-control is-valid"
          id="inputValid"
        />
        <div className="valid-feedback">Success! You've done it.</div>
      </div>

      <div className="form-group has-danger">
        <label className="form-label mt-4" htmlFor="inputInvalid">
          Invalid input
        </label>
        <input
          type="text"
          value="wrong value"
          className="form-control is-invalid"
          id="inputInvalid"
        />
        <div className="invalid-feedback">
          Sorry, that username's taken. Try another?
        </div>
      </div>
    </Card>
  );
}
