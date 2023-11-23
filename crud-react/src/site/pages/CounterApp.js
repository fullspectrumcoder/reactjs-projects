import React, { useEffect, useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [counting, setCounting] = useState(0);
  const [itemName, setItemName] = useState("SubhanAllah");
  const [zikrList, setZikrList] = useState([]);
  const [authUser, setAuthUser] = useState(null);
  const [list, setList] = useState([
    {
      id: 1,
      name: "SubhanAllah",
      img: "img1",
    },
    {
      id: 2,
      name: "AlHamdullilah",
      img: "img1",
    },
    {
      id: 3,
      name: "AllahuAkbar",
      img: "img1",
    },
    {
      id: 4,
      name: "Astaghfirullah",
      img: "img1",
    },
    {
      id: 5,
      name: "La ilaha illallah",
      img: "img1",
    },
    {
      id: 6,
      name: "La hawla Wala Quwwata Illa Billah",
      img: "img1",
    },
  ]);

  useEffect(() => {
    let fetchList = localStorage.getItem("tasbihList");
    fetchList = JSON.parse(fetchList);
    setZikrList(fetchList);
    console.log(fetchList);
    if (fetchList === null) {
      let dataInStr = JSON.stringify([]);
      localStorage.setItem("tasbihList", dataInStr);
    }

    let fetchUser = localStorage.getItem("AuthenticatedUser");
    fetchUser = JSON.parse(fetchUser);
    setAuthUser(fetchUser);

    for (let i = 0; i < fetchList.length; i++) {
      if (fetchUser.email !== fetchList[i].email) {
        setCounter(0);
        break;
      } else {
        for (let i = 0; i < list.length; i++) {
          let findName = list[i].name === fetchList[i].name;
          console.log(findName.length);
          break;
        }
      }
    }
  }, []);

  const openCounter = (item, email) => {
    setItemName(item.name);

    let findEmail = zikrList.filter((i) => i.email === email);
    if (findEmail) {
      let findName = findEmail.filter((i) => i.name === item.name);
      if (findName.length === 0) {
        setCounter(0);
      } else {
        setCounter(findName.length + 1);
      }
    }
  };

  const startCounter = () => {
    setCounter(counter + 1);

    let data = {
      name: itemName,
      count: counter,
      email: authUser.email,
    };

    let zikrListClone = zikrList.slice(0);
    zikrListClone.push(data);
    setZikrList(zikrListClone);
    let newList = JSON.stringify(zikrList);
    localStorage.setItem("tasbihList", newList);
  };

  const resetCounter = () => {
    if (counter !== "") {
      let findEmail = zikrList.filter((i) => i.email === authUser?.email);
      let otherEmail = zikrList.filter((i) => i.email !== authUser?.email);
      if (findEmail !== null) {
        let findName = findEmail.filter((i) => i.name !== itemName);

        let updatedZikrList = otherEmail.concat(findName);
        setZikrList(updatedZikrList);
        let newList = JSON.stringify(updatedZikrList);
        localStorage.setItem("tasbihList", newList);
        setCounter(0);
      }
    }
  };
  return (
    <>
      <h2>Counter App</h2>
      <div style={{ margin: "20px 0" }}>
        <ul>
          {list.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => openCounter(item, authUser.email)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cApp">
        <h1>{itemName}</h1>
        <h2>{counter}</h2>
        <button
          onClick={startCounter}
          style={{ margin: 10, padding: 10, fontSize: 16 }}
        >
          Start
        </button>
        <button
          onClick={resetCounter}
          style={{ margin: 10, padding: 10, fontSize: 16 }}
        >
          Reset
        </button>
      </div>

      <div style={{ margin: "20px 0" }}>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id} style={{ margin: "20px 0" }}>
                {item.name} <span style={{ marginLeft: 20 }}>{counting}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CounterApp;
