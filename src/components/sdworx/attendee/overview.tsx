"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TBody, TH, THead, TR, Table } from "@/components/ui/typography"
import AttendeeItem from "./item"

interface Props {
  attendees: any
}

const ITEMS_PER_PAGE = 3

export default function AttendeeOverview({ attendees }: Props) {
  const [data, setData] = useState(attendees)
  const [list, setList] = useState(attendees.slice(0, ITEMS_PER_PAGE))
  const [page, setPage] = useState(0)
  const pageMax = Math.ceil(data.length / ITEMS_PER_PAGE) - 1

  useEffect(() => console.log("page", page), [page])

  const onDelete = (idx: number) => {
    // Copy original list
    const newList = JSON.parse(JSON.stringify(data))

    // Remove the index we specified from it
    newList.splice(idx, 1)

    // Then we show the list for the items at the current page
    console.log("deleting")
    console.log(
      newList.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
      )
    )
    setList(
      newList.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
      )
    )
  }

  const onPageSelect = (newPage) => {
    if (newPage > data.length / ITEMS_PER_PAGE) {
      newPage = data.length / ITEMS_PER_PAGE
    }

    if (newPage <= 0) {
      newPage = 0
    }

    const newList = data.slice(
      newPage * ITEMS_PER_PAGE,
      newPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )

    setList(newList)
    setPage(newPage)
  }

  const onPageNext = () => {
    onPageSelect(page + 1)
  }

  const onPagePrev = () => {
    onPageSelect(page - 1)
  }

  const onSearch = (value) => {
    setList(data.filter((item) => item.name.includes(value)))
    setPage(0)
  }

  const onClickSort = (key, order) => () => {
    const newList = JSON.parse(JSON.stringify(data))

    newList.sort((a, b) => {
      if (a[key] < b[key]) {
        return order === "asc" ? -1 : 1
      }

      if (a[key] > b[key]) {
        return order === "asc" ? 1 : -1
      }

      return 0
    })

    setList(newList)
  }

  return (
    <div className="h-full flex flex-col flex-1">
      <Input
        type="text"
        className="mt-2 border border-slate-200 rounded-lg p-2"
        placeholder="Enter text to search"
        onChange={(e) => onSearch(e.target.value)}
      />

      <Table className="flex-1 w-full mt-4 overflow-y-auto">
        <THead>
          <TR className="m-0 border border-slate-200 bg-slate-200">
            {/* IDX */}
            <TH className="border-none">
              <div className="ml-2 flex flex-col">
                <span
                  className="p-1 font-normal hover:rounded hover:bg-gray-100"
                  onClick={onClickSort("id", "asc")}
                >
                  <ChevronUp className="h-4 w-4" />
                </span>
                <span
                  className="p-1 font-normal hover:rounded hover:bg-gray-100"
                  onClick={onClickSort("id", "desc")}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </div>
            </TH>

            {/* Avatar */}
            <TH className="border-none"></TH>

            {/* Details */}
            <TH className="border-none px-4 py-2 text-left flex flex-row items-center">
              Name
              <div className="ml-2 flex flex-col">
                <span
                  className="text-xs p-1 font-normal hover:rounded hover:bg-gray-100"
                  onClick={onClickSort("name", "asc")}
                >
                  A-Z
                </span>
                <span
                  className="text-xs p-1 font-normal hover:rounded hover:bg-gray-100"
                  onClick={onClickSort("name", "desc")}
                >
                  Z-A
                </span>
              </div>
            </TH>
            <TH className="border-none px-4 py-2 text-left">Date of Birth</TH>
            <TH className="border-none px-4 py-2 text-left">City</TH>
            <TH className="border-none px-4 py-2 text-left">Country</TH>

            {/* Actions */}
            <TH className="border-none px-4 py-2 text-left"></TH>
          </TR>
        </THead>
        <TBody>
          {list.map((attendee, idx) => (
            <AttendeeItem
              key={`attendee-${idx}`}
              idx={idx}
              attendee={attendee}
              onDelete={onDelete}
            />
          ))}
        </TBody>
      </Table>

      <div className="mt-4 flex-1 flex flex-row justify-between w-full space-x-4">
        {page != 0 && <Button onClick={onPagePrev}>Prev</Button>}

        {page != 0 && (
          <Button variant="outline" onClick={() => onPageSelect(0)}>
            1
          </Button>
        )}
        {page != 0 && <Button variant="ghost">...</Button>}
        {page != 0 && <Button variant="ghost">{page + 1}</Button>}
        {page != pageMax && <Button variant="ghost">...</Button>}

        {page != pageMax && (
          <Button variant="outline" onClick={() => onPageSelect(pageMax)}>
            {pageMax + 1}
          </Button>
        )}

        {page != pageMax && (
          <Button onClick={onPageNext} className="ml-auto">
            Next
          </Button>
        )}
      </div>
    </div>
  )
}
