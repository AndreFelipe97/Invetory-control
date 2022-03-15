import { Card } from "../components/card";

export default function List() {
  return (
    <Card header="List">
      <div className="d-flex flex-row-reverse">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Buscar"
          />
        </div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light">
            <th scope="row">Light</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
