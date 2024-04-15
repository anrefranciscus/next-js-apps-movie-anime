const Pagination = ({page, lastPage, setPage}) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0,
        })
    }
    const setNextPage = () => {
        scrollTop()
        setPage((prevState) => prevState + 1)
    }
    const setPrevPage = () => {
        scrollTop()
        setPage((prevState) => prevState - 1)
    }
    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page <= 1 ? null :
                <button onClick={setPrevPage} className="transition-all hover:text-color-accent">Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
                <button onClick={setNextPage} className="transition-all hover:text-color-accent">Next</button>
            }
        </div>
    )
}

export default Pagination