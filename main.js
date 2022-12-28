matrix = []
let count = 1
for (let i = 0; i < 3; i++){
    matrix.push([])
    for (let x = 0; x < 3; x++){
        matrix[i].push(count)
        count --
    }
}

// console.table(matrix)

function smallestInRow (arr){
    let smallest = 0
    let sml_num_arr = []
    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        for(let x = 0; x < arr.length; x++){
            if (x === 0){
                smallest = arr[i][x]
            }
            else{
                if (arr[i][x] < smallest){
                    smallest = arr[i][x]
                }
            }
        }
       sml_num_arr.push(smallest) 
    }
    console.log(sml_num_arr);
}

smallestInRow(matrix)