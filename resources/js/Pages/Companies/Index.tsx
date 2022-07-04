import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head, InertiaLink, usePage } from "@inertiajs/inertia-react";
import { DataGrid } from "@mui/x-data-grid";
// @ts-ignore
import Authenticated from "@/Layouts/Authenticated"; // eslint-disable-line import/no-unresolved, import/extensions
// @ts-ignore
import AlertMessage from "@/Components/AlertMessage"; // eslint-disable-line import/no-unresolved, import/extensions

function destroy(id: number) {
    if (
        confirm("Are you sure you want to delete this contact?") // eslint-disable-line no-alert, no-restricted-globals
    ) {
        // @ts-ignore
        Inertia.delete(route("companies.destroy", id)); // eslint-disable-line no-undef
    }
}

interface ActionButtonPropType {
    id: number;
}

function ActionButtons({ id }: ActionButtonPropType) {
    return (
        <>
            <InertiaLink
                href={
                    // @ts-ignore
                    route("companies.edit", id) // eslint-disable-line no-undef
                }
            >
                Edit
            </InertiaLink>
            <span className="pl-2 pr-2">|</span>
            <button type="button" onClick={() => destroy(id)}>
                Delete
            </button>
        </>
    );
}

const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 70,
    },
    {
        field: "name",
        headerName: "Company Name",
        width: 250,
    },
    {
        field: "ceo",
        headerName: "CEO Name",
        width: 200,
    },
    {
        field: "address",
        headerName: "Address",
        type: "number",
        width: 300,
    },
    {
        field: "inception_date",
        headerName: "Inception date",
        type: "number",
        width: 160,
    },
    {
        field: "action",
        headerName: "Action",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        renderCell: (params) => {
            return <ActionButtons id={params.row.id} />;
        },
    },
];

function DataTable({ rows }: any) {
    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

function Index({ auth, errors }: any) {
    const { companies } = usePage().props;
    return (
        <Authenticated
            auth={auth}
            errors={errors}
            header={
                <div className="flex items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight col-span-4">
                        Companies
                    </h2>
                    <div className="flex items-center ml-auto">
                        <InertiaLink
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            // @ts-ignore
                            href={route("companies.create")} // eslint-disable-line no-undef
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
                        <AlertMessage />
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <DataTable rows={companies} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default Index;
