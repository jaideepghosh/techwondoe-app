import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { DataGrid } from "@mui/x-data-grid";

function destroy(id) {
    if (confirm("Are you sure you want to delete this contact?")) {
        Inertia.delete(route("companies.destroy", id));
    }
}

const ActionButtons = ({ id }) => {
    return (
        <>
            <InertiaLink href={route("companies.edit", id)}>Edit</InertiaLink>
            <span className="pl-2 pr-2">|</span>
            <div onClick={(_) => destroy(id)}>Delete</div>
        </>
    );
};

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

const DataTable = ({ rows }) => {
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
};

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
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <DataTable rows={companies} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
