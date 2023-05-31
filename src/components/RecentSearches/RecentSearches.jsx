import React, { useEffect, useContext, useState } from 'react'
import { RecentSearchContext } from '../../context/RecentSearchContext'

import { Typography, Grid } from '@mui/material'

import RecentSearchLocCard from '../RecentSearchLocCard/RecentSearchLocCard'
import RecentSearchBathroom from '../RecentSearchBathroom/RecentSearchBathroom'

export default function RecentSearches() {
    const { recentSearches } = useContext(RecentSearchContext)

    // const [accordionOpen, setAccordionOpen] = useState(false)

    // const photo_64 = "data:image/jpeg;base64,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"

    // useEffect(()=>{
    //     recentSearches.map((search)=>{
    //         console.log(search)
    //         console.log(search.origin_name)
    //     })
    // },[recentSearches])
    // useEffect(()=>{
    //     setAccordionOpen(false)
    // },[recentSearches])

    return (
        <Grid container sx={{width: '100%', maxHeight:"500px", overflow:"scroll", marginLeft: "10px"}} spacing={1}>
            {/* <Grid item container>
            <RecentSearchLocCard originName="Paris" originAddress="Paris, France" image={photo_64}/>
            </Grid>
            <Grid item container>
            <RecentSearchBathroom bathroom={{id: "id", upvote:"1", downvote:"2"}}/>
            </Grid> */}
            {/* <RecentSearchLocCard originName="Name of Place" originAddress="Name of City" image={photo_64}/> */}
            {recentSearches?.map((search, i)=>(
                <>
                <Grid item container>
                <RecentSearchLocCard key={i} originName={search.origin_name} originAddress={search.origin_address} image={search.photo_base_64}/>
                </Grid>
                <>
                {search.bathrooms?.map((bathroom, j)=>(
                    <Grid item container>
                        <RecentSearchBathroom key={{i:j}} bathroom={bathroom} originName={search.origin_name} originAddress={search.origin_address}/>
                    </Grid>
                ))}
                </>   
                </>
            ))}
        </Grid>
    )
}
