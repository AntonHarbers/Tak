
import { useEffect, useState } from "react"
import type { BoardData, Cell } from "../types"

const BOARD_SIZE = 5

const createEmptyBoard = (): BoardData => {
    return Array.from({ length: BOARD_SIZE }, (_, row) =>
        Array.from({ length: BOARD_SIZE }, (_, col) => ({
            id: row * BOARD_SIZE + col
        }))
    )
}


export const Board: React.FC = () => {
    const [board, setBoard] = useState<BoardData>(createEmptyBoard())
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const handleCellClick = (cell: Cell) => {
        console.log(cell)
        setSelectedCell(cell)
    }

    useEffect(() => {
        const newBoard = createEmptyBoard()
        setBoard(newBoard)
    }, [])

    return (
        <div
            className="grid gap-1 bg-gray-800 p-2 mx-auto rounded-lg"
            style={{
                gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
                gridAutoRows: '1fr',
                width: '90vmin',
                maxWidth: '600px',
                maxHeight: '90vh',
            }}
        >
            {board.map((row: Cell[]) =>
                row.map((cell: Cell) => (
                    <div
                        key={cell.id}
                        onClick={() => handleCellClick(cell)}
                        className={`bg-gray-300 border border-gray-500 aspect-square rounded-md
                            cursor-pointer transition-colors duration-100 ease-in-out
                            hover:bg-gray-400 hover:shadow-md ${selectedCell?.id === cell.id ? 'bg-gray-600' : ''}`}
                    />
                ))
            )}
        </div>
    )
}
