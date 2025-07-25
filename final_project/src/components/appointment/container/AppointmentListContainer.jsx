function AppointmentListContainer( {children} ){
    return(
        <>
            <div className="flex justify-center">
                <section className="flex flex-wrap items-end justify-center gap-10 md:gap-16">
                    {children}
                </section>
            </div>
        </>
    )
}

export default AppointmentListContainer