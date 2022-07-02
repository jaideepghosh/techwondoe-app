import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Create = (props) => {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="grid grid-cols-4">
                    <div className="col-span-3">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight col-span-4">
                            Create Company
                        </h2>
                    </div>
                    <div>
                        <InertiaLink
                            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            href={route("companies.index")}
                        >
                            <span>View</span>
                            <span className="hidden md:inline"> Companies</span>
                        </InertiaLink>
                    </div>
                </div>
            }
        >
            <Head title="Companies" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
