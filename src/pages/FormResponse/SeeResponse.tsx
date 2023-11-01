/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SeeResponse({ data, setIsResponseDisplay }: any) {
  //   console.log(data);
  return (
    <div>
      <button
        onClick={() => setIsResponseDisplay(false)}
        className="btn btn-link mb-10"
      >
        Back
      </button>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {data?.map((item: any, index: number) => (
                <th key={index}>{item?.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data?.map((item: any, index: number) => (
                <td key={index}>{item?.value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
