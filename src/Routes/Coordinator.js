export const goToHome = (navigate) =>{
    navigate("/")
}

export const goToCreateTrip = (navigate) =>{
    navigate("/createTrip")
}

export const goToApplicationTrip = (navigate) =>{
    navigate("/application")
}

export const goToLogin = (navigate) =>{
    navigate("/login")
}

export const goToTripList = (navigate) =>{
    navigate("/tripList")
}

export const goToTripDetail = (navigate, id) =>{
    navigate(`/tripDetail/${id}`)
}