import React, { useState } from "react";
import Layout from "../components/Layout";
import Table from "../components/Table/Table";

import dataFromBackend from "../assets/hikers.json";
import styled from "styled-components";

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: lightgray;
`;

const Input = styled.input`
  padding: 5px;
  box-sizing: border-box;
`;

const ActionButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export interface Item {
  id: string;
  avatar: string;
  name: string;
  dateOfBirth: string;
  city: string;
  country: string;
  deletable: boolean;
  editable: boolean;
  edited: boolean;
}

function ListComponent() {
  const initialItems = dataFromBackend.map((item) => ({
    ...item,
    deletable: true,
    editable: true,
    edited: false,
  }));

  const [data, setData] = useState<Item[]>(initialItems);

  function onItemPropertyChange(
    item: Item,
    property: keyof Item,
    value: string
  ) {
    const index = data.findIndex((d) => d.id === item.id);
    setData((data) => [
      ...data.slice(0, index),
      { ...item, [property]: value },
      ...data.slice(index + 1),
    ]);
  }

  function toggleEdit(item: Item, edited: boolean) {
    const index = data.findIndex((d) => d.id === item.id);
    setData((data) => [
      ...data.slice(0, index),
      { ...item, edited },
      ...data.slice(index + 1),
    ]);
  }

  function onShowDeletePrompt(item: Item) {
    const doDelete = window.confirm("Are you sure to delete this row?");
    if (doDelete) {
      onDelete(item);
    }
  }

  function onDelete(item: Item) {
    setData((data) => data.filter((d) => d.id !== item.id));
  }

  const columns = [
    {
      key: "avatar" as const,
      displayName: "",
      displayRow: (item: Item) => <Image src={item.avatar} alt={item.name} />,
    },
    {
      key: "name" as const,
      displayName: "NAME",
      displayRow: (item: Item) =>
        item.edited ? (
          <Input
            value={item.name}
            onChange={(e) => {
              const value = e.currentTarget.value ?? "";
              onItemPropertyChange(item, "name", value);
            }}
          />
        ) : (
          item.name
        ),
      sortable: true,
    },
    {
      key: "dateOfBirth" as const,
      displayName: "DATE OF BIRTH",
      displayRow: (item: Item) =>
        item.edited ? (
          <Input
            value={item.dateOfBirth}
            onChange={(e) => {
              const value = e.currentTarget.value ?? "";
              onItemPropertyChange(item, "dateOfBirth", value);
            }}
          />
        ) : (
          item.dateOfBirth
        ),
      sortable: true,
    },
    {
      key: "city" as const,
      displayName: "CITY",
      displayRow: (item: Item) =>
        item.edited ? (
          <Input
            value={item.city}
            onChange={(e) => {
              const value = e.currentTarget.value ?? "";
              onItemPropertyChange(item, "city", value);
            }}
          />
        ) : (
          item.city
        ),
      sortable: true,
    },
    {
      key: "country" as const,
      displayName: "COUNTRY",
      displayRow: (item: Item) =>
        item.edited ? (
          <Input
            value={item.country}
            onChange={(e) => {
              const value = e.currentTarget.value ?? "";
              onItemPropertyChange(item, "country", value);
            }}
          />
        ) : (
          item.country
        ),
      sortable: true,
    },
    {
      key: "editable" as const,
      displayName: "",
      displayRow: (item: Item) => {
        if (!item.editable) return null;
        return item.edited ? (
          <>
            <ActionButton onClick={() => toggleEdit(item, false)}>
              save
            </ActionButton>
            <ActionButton
              onClick={() => {
                const index = data.findIndex((d) => d.id === item.id);
                console.log({ initialItems, index });
                toggleEdit(item, false);
                setData((data) => [
                  ...data.slice(0, index),
                  initialItems[index],
                  ...data.slice(index + 1),
                ]);
              }}
            >
              cancel
            </ActionButton>
          </>
        ) : (
          <ActionButton onClick={() => toggleEdit(item, true)}>
            edit
          </ActionButton>
        );
      },
    },
    {
      key: "deletable" as const,
      displayName: "",
      displayRow: (item: Item) => {
        if (!item.deletable || item.edited) return null;
        return (
          <ActionButton onClick={() => onShowDeletePrompt(item)}>
            delete
          </ActionButton>
        );
      },
    },
  ];

  return (
    <Layout title={`Attendees (${data.length})`}>
      <Table columns={columns} data={data} />
    </Layout>
  );
}

export default ListComponent;
