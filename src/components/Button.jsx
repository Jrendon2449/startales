import { useState } from 'react'

export default function Button(props) {
    return (
        <button class="button">
            {props.name}
        </button>
    )
   
}