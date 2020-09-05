import React, { useState, useEffect, useContext, useRef } from "react";

import ContextApp from "../../../context";

import Checkbox from "../Checkbox";

import "./table.scss";

const Table = () => {
  const [itemsToRender, updateItemsToRender] = useState([...Array(50)]);
  const {
    itemsInfo: { isAllSelected, list },
    updateItemsInfo,
  } = useContext(ContextApp);
  const ref = useRef();

  const handleClick = (isChecked, value) => {
    if (isChecked) {
      updateItemsInfo(
        value === 0
          ? { isAllSelected: true, list: list.fill(true) }
          : {
              isAllSelected: false,
              list: list.map((item, i) => (i === value ? true : item)),
            }
      );
    } else {
      updateItemsInfo({
        isAllSelected: false,
        list:
          value === 0
            ? list.fill(false)
            : list.map((item, i) => (i === value ? false : item)),
      });
    }
  };

  const handleScroll = () => {
    const {
      current: { scrollHeight, clientHeight, scrollTop },
    } = ref;

    if (clientHeight + scrollTop + 200 > scrollHeight) {
      const newItems = [];
      itemsToRender.forEach((item, i) =>
        newItems.push(list[i + itemsToRender.length])
      );
      updateItemsToRender([...itemsToRender, ...newItems]);
    }
  };

  useEffect(() => {
    ref.current.addEventListener("scroll", handleScroll);

    return () => {
      ref.current.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div className="table__wrapper" ref={ref}>
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            <th className="table__column-checkbox">
              <Checkbox
                name="select_all"
                value={0}
                onClick={handleClick}
                isChecked={isAllSelected}
              />
            </th>
            <th className="table__column-id">id</th>
            <th className="table__column-text">Text</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {itemsToRender.map((item, i) => (
            <tr className="table__row" key={`${item}${i}`}>
              <td className="table__column-checkbox">
                <Checkbox
                  name={`${i + 1}`}
                  value={i + 1}
                  onClick={handleClick}
                  isChecked={list[i + 1]}
                />
              </td>
              <td className="table__column-id">{`id: ${i + 1}`}</td>
              <td className="table__column-text">Text</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
