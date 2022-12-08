export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToProfilePage = (navigate) => {
    navigate("/profile/:name")
}

export const goToProductPage = (navigate, id) => {
    navigate(`/product/${id}`)
}