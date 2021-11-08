import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Person() {
  const router = useRouter();
  const ownerList = [];
  const [owners, setOwner] = useState(ownerList);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        "http://localhost:8080/owner-list?ownerName=" +
          router.query.person +
          "&vehicle=" +
          router.query.vehicle
      );
      const ownerList = await response.json();
      setOwner(ownerList);
      console.log(ownerList);
    }
    if (ownerList.length == 0) {
      loadData();
    }
    // loadData();
  }, []);
  //   return <pre>{JSON.stringify(ownerList, null, 4)}</pre>;
  if (!owners[0]) {
    return <div>Loading....</div>;
  }
  return (
    <pre>
      {owners[0]?.vehicle}-{owners[0]?.ownerName}
    </pre>
  );

  //   console.log(router.query);
  //   return (
  //     <h2>
  //       {router.query.person}&apos;s {router.query.vehicle}
  //     </h2>
  //   );
}
// Person.getInitialProps = async (ctx) => {
//   if (!ctx.req) {
//     return { ownerList: [] };
//   }
//   const response = await fetch("http://localhost:8080/owner-list");
//   const ownerList = await response.json();
//   return { ownerList: ownerList };
// };
