"use client"
import Pagination from "@/components/Utilities/Pagination";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import {useEffect, useState} from "react";
import AnimeList from "@/components/AnimeList";
import {getAnimeResponse} from "@/libs/api-libs";

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    const fetchData = async () => {
        const popularAnime = await getAnimeResponse("top/anime",`page=${page}`)
        setTopAnime(popularAnime)
    }

    useEffect(() => {
        fetchData().then()
    },[page])
    return(
        <>
            <HeaderMenu title={`Anime Terpopuler #${page}`}/>
            <AnimeList api={topAnime}/>
            <Pagination
                page={page}
                lastPage={topAnime.pagination?.last_visible_page}
                setPage={setPage}
            />
        </>
    )
}

export default Page