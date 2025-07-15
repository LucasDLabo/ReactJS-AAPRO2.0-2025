function AppointmentListContainer( {children} ){
    return(
        <>
            <div className="flex justify-center px-10">
                <section className="flex flex-wrap items-end justify-center gap-16">
                    {children}
                </section>
            </div>
        </>
    )
}

export default AppointmentListContainer