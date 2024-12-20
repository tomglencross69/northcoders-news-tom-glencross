import Select from "react-select"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getAllArticles } from "../api"
import { useSearchParams } from "react-router-dom"

export default function SortByList ({articles, setArticles}) {
    
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedSortByOption, setSelectedSortByOption] = useState(null)
    const [selectedOrderOption, setSelectedOrderOption] = useState(null)
    const [selectedSortByValue, setSelectedSortByValue] = useState(null)
    const [selectedOrderValue, setSelectedOrderValue] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [makeSortQuery, setMakeSortQuery] = useState(false)
    
    const sortOptions = [
     {value: 'created_at', label: 'date written'},
     {value: 'votes', label: 'number of votes'},
     {value: 'comment_count', label: 'number of comments'}
    ]
    
    const orderOptions = [
     {value: 'desc', label: 'descending'},
     {value: 'asc', label: 'ascending'}
    ]

    
    const handleSortByChange = (option) => {
        const value = option ? option.value : null;
        console.log('Selected Sort By:', value);
        setSelectedSortByOption(value)
        setSelectedSortByValue(option);
    };
    
    const handleOrderChange = (option) => {
        const value = option ? option.value : null;
        console.log('Selected Order:', value);
        setSelectedOrderOption(value)
        setSelectedOrderValue(option)
    };
    
    const handleSortButtonClick = () => {
        setMakeSortQuery(true)
        updateURL()
    }
    
    const updateURL = () => {
        const params = new URLSearchParams()
        if (selectedSortByOption) params.set('sort_by', selectedSortByOption)
        if (selectedOrderOption) params.set('order', selectedOrderOption)
        setSearchParams(params)
    }
    
    useEffect(()=> {
        const sortBy = searchParams.get('sort_by')
        const order = searchParams.get('order')
    
        if (sortBy) setSelectedSortByOption(sortBy)
        if (order) setSelectedOrderOption(order)
    }, [searchParams])
    
   useEffect(()=>{
    if (makeSortQuery) {
        setIsLoading(true)
        getAllArticles(null, null, selectedSortByOption, selectedOrderOption)
        .then((fetchedArticles)=>{
            return fetchedArticles
        })
        .then((articlesData) => {
            setArticles(articlesData)
            setIsError(false)
            setIsLoading(false)
            setMakeSortQuery(false)
            setSelectedOrderOption(null)
            setSelectedSortByOption(null)
            setSelectedOrderValue(null)
            setSelectedSortByValue(null)
        })
        .catch((error)=>{
            setIsError(true)
            setIsLoading(false)
            console.log(error, "error in main articles catch")
        })  
    }
}, [selectedSortByOption, selectedOrderOption, makeSortQuery])

if (isLoading) return <p>Loading...</p>
if (isError) return <p>Error fetching....</p>

   
    return (
        <div className="sort-by-component">
            <p className="component-label">sort by list component</p>
            <p className="sort-by-dropdown-label">Sort articles by:</p>
            <Select className="drop-down" 
            classNamePrefix="custom-select"
            name="sort-by"
            value={selectedSortByValue}
            options={sortOptions}
            onChange={handleSortByChange}
            />
            <p className="order-by-dropdown-label">Order:</p>
            <Select className="drop-down" 
            classNamePrefix="custom-select"
            name="order-by"
            value={selectedOrderValue}
            options={orderOptions}
            onChange={handleOrderChange}/>
            <button onClick={handleSortButtonClick}>Sort!</button>
        </div>
    )
}