"use client";

import React from 'react'
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition} from '@headlessui/react'
import { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';
const SearchManufacturer = ({ selected,setSelected }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) => (
                item.toLowerCase().replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            ))

    return (
        <div className="search-manufacturer">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="Car logo"
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e => { setQuery(e.target.value) })}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="search-manufacturer__options" static>
                            {filteredManufacturers.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    className={({ active }) => `relative search-manufacturer__option
                                        ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                    `}
                                    value={item}
                                >
                                    {({ active, selected }) => (
                                        <li
                                            // className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                        >
                                            {selected}
                                            {item}
                                        </li>
                                    )}
                                </Combobox.Option>
                            ))
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer