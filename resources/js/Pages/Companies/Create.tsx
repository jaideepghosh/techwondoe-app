import React from "react";
import { Head, InertiaLink, useForm } from "@inertiajs/inertia-react";
import { Button, Grid, TextField } from "@mui/material";
// @ts-ignore
import Authenticated from "@/Layouts/Authenticated"; // eslint-disable-line import/no-unresolved, import/extensions

function Create({ auth, errors: propError }: any) {
    const { data, setData, errors, post } = useForm({
        name: "",
        ceo: "",
        address: "",
        inception_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // @ts-ignore
        post(route("companies.store")); // eslint-disable-line no-undef
    };

    return (
        <Authenticated
            auth={auth}
            errors={propError}
            header={
                <div className="flex items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight col-span-4">
                        Create Company
                    </h2>
                    <div className="flex items-center ml-auto">
                        <InertiaLink
                            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            // @ts-ignore
                            href={route("companies.index")} // eslint-disable-line no-undef
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
                                            required
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
                                            required
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
}

export default Create;
