import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { companies } = usePage().props;
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="grid grid-cols-4">
                    <div className="col-span-3">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight col-span-4">
                            Companies
                        </h2>
                    </div>
                    <div>
                        <InertiaLink
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            href={route("companies.create")}
                        >
                            <span>Create</span>
                            <span className="hidden md:inline"> Company</span>
                        </InertiaLink>
                    </div>
                </div>
            }
        >
            <Head title="Companies" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in! Really
                        </div> */}
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Company name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            CEO
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Address
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Inception date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companies.map((company) => (
                                        <tr
                                            key={company.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                            >
                                                {company.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {company.ceo}
                                            </td>
                                            <td className="px-6 py-4">
                                                {company.address}
                                            </td>
                                            <td className="px-6 py-4">
                                                {company.inception_date}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Edit
                                                </a>{" "}
                                                |{" "}
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Delete
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
