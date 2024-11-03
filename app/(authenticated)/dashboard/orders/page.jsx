import Structure from "../structure";

const Page = () => {
  return (
    <>
      <Structure title="My Orders">
        <div>
          <h1>Fix the col-span of the table, let some span 2 columns</h1>
          <table className="">
            <thead>
              <tr>
                <th className="px-5 py-[15px] ">Order</th>
                <th className="px-5 py-[15px] "> Date</th>
                <th className="px-5 py-[15px] ">Status</th>
                <th className="px-5 py-[15px] ">Total</th>
                <th className="px-5 py-[15px] ">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-[15px]">123456</td>
                <td className="px-5 py-[15px]">12/12/2021</td>
                <td className="px-5 py-[15px]">Delivered</td>
                <td className="px-5 py-[15px]">₦ 12,000</td>
                <td className="px-5 py-[15px]">
                  <button className="bg-black text-white block py-3 px-6">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-[15px]">123456</td>
                <td className="px-5 py-[15px]">12/12/2021</td>
                <td className="px-5 py-[15px]">Delivered</td>
                <td className="px-5 py-[15px]">₦ 12,000</td>
                <td className="px-5 py-[15px]">
                  <button className="bg-black text-white block py-3 px-6">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-[15px]">123456</td>
                <td className="px-5 py-[15px]">12/12/2021</td>
                <td className="px-5 py-[15px]">Delivered</td>
                <td className="px-5 py-[15px]">₦ 12,000</td>
                <td className="px-5 py-[15px]">
                  <button className="bg-black text-white block py-3 px-6">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Structure>
    </>
  );
};

export default Page;
