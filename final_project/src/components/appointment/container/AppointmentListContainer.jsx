function AppointmentListContainer( {children} ){
    return(
        <>
            <section className="flex flex-wrap items-center justify-center gap-16">
                {children}
            </section>
        </>
    )
}

export default AppointmentListContainer