import React from "react";
// @ts-ignore
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import { Button, Grid, TextField } from "@mui/material";

const Edit = (props) => {
    const { company } = usePage<any>().props;

    const { data, setData, errors, put, processing } = useForm({
        name: company.name || "",
        ceo: company.ceo || "",
        address: company.address || "",
        inception_date: company.inception_date || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // @ts-ignore
        put(route("companies.update", company.id));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <div className="flex items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight col-span-4">
                        Edit Company
                    </h2>
                    <div className="flex items-center ml-auto">
                        <InertiaLink
                            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            // @ts-ignore
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
                            <form autoComplete="off" onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Company Name"
                                            name="name"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                            value={data.name}
                                            error={!!errors.name}
                                            helperText={errors.name}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="CEO name"
                                            name="ceo"
                                            onChange={(e) =>
                                                setData("ceo", e.target.value)
                                            }
                                            required
                                            value={data.ceo}
                                            error={!!errors.ceo}
                                            helperText={errors.ceo}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Address"
                                            name="address"
                                            onChange={(e) =>
                                                setData(
                                                    "address",
                                                    e.target.value
                                                )
                                            }
                                            value={data.address}
                                            error={!!errors.address}
                                            helperText={errors.address}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Inception Date"
                                            name="inception_date"
                                            onChange={(e) =>
                                                setData(
                                                    "inception_date",
                                                    e.target.value
                                                )
                                            }
                                            type="date"
                                            value={data.inception_date}
                                            error={!!errors.inception_date}
                                            helperText={errors.inception_date}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                                <div className="pt-4">
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Save Company
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Edit;
