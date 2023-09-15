import numpy as np

class SparseMatrix:
    def __init__(self):
        self.data = {}

    def set(self, row, col, value):
        if self.data.get((row, col)) != 0 and value > 0:
            self.data[(row, col)] = value
        elif value < 0:
            raise ValueError("The value must be greater than 0.")
        elif value != 0:
            self.data[(row, col)] = value
        else:
            raise ValueError("Can't set value to 0.")

    def get(self, row, col):
        return self.data.get((row, col), 0)

    def recommend(self, vector):
        num_rows = len(vector)
        num_cols = self.num_cols()
        if num_rows != num_cols:
            raise ValueError("Matrix Multiplication not possible as the number of rows of the vector does not match the number of columns of the matrix.")
        
        

        result = [0] * num_rows
        for (row, col), value in self.data.items():
            result[row] += value * vector[col]
        return result

    def add_movie(self, matrix):
        result = SparseMatrix()
        result.data = self.data.copy()

        if self.num_rows() != matrix.num_rows():
            raise ValueError("The two matrices must have the same number of rows.")

        if self.num_cols() != matrix.num_cols():
            raise ValueError("The two matrices must have the same number of columns.")
        
        for (row, col), value in matrix.data.items():
            if (row, col) in result.data:
                result.data[(row, col)] += value
            else:
                result.data[(row, col)] = value
        return result

    def to_dense(self):
        max_row = max(row for row, _ in self.data.keys()) + 1
        max_col = max(col for _, col in self.data.keys()) + 1
        dense_matrix = [[0] * max_col for _ in range(max_row)]
        for (row, col), value in self.data.items():
            dense_matrix[row][col] = value
        return dense_matrix

    def maximum_number_of_columns(self):
        max_col = 0
        for (row, col), _ in self.data.items():
            max_col = max(max_col, col)
        return max_col + 1
    
    def maximum_number_of_rows(self):
        max_row = 0
        for (row, _), _ in self.data.items():
            max_row = max(max_row, row)
        return max_row + 1

    # This is the alias name for the function maximum_number_of_rows
    num_rows = maximum_number_of_rows

    # This is the alias name for the function maximum_number_of_rows
    num_cols = maximum_number_of_columns