import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { IUserData } from "./IUserData";

const PaginationWrapper = () => {
  const [userData, setUserData] = useState<IUserData[]>([]);
  const [total, setTotal] = useState(100);

  const renderItem = (user: IUserData) => {
    return (
        <>
          <div key={user.id} className="pagination__userContainer">
            <span>{`Name: ${user.firstName}`}</span>
            &nbsp;
            <span>{`age: ${user.age}`}</span>
          </div>
        </>
      )
  };

  async function getData(limit:number, skip:number) {
    const response = await fetch(
      `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=firstName,age`
    );
    const userDataResp = await response.json();
    console.log(userDataResp);
    setTotal(userDataResp.total);
    setUserData(userDataResp.users);
  }

  useEffect(() => {
    getData(10, 0);
  }, []);

  return (
    <Pagination
      data={userData}
      renderItem={renderItem}
      initialPage={1}
      countPerPage={10}
      totalItems={total}
      fetchData={getData}
    />
  );
};

export default PaginationWrapper;
