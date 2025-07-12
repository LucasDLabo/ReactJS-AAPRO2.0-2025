function AppointmentListContainer( {children} ){
    return(
        <>
            <div className="flex justify-center">
                <section className="flex flex-wrap w-[72.7vw] items-center justify-start gap-16">
                    {children}
                </section>
            </div>
        </>
    )
}

export default AppointmentListContainer