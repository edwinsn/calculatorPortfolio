import { useEffect, useRef } from "react"


export default function useOnScreen(ref, onScreen) {

    const observer = useRef()

    useEffect(() => {
        observer.current = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    onScreen()
                    observer.current.disconnect()
                }
            })
    }, [onScreen])

    useEffect(() => {
        observer.current.observe(ref.current)
        return () => { observer.current.disconnect() }
    }, [ref, onScreen])

}