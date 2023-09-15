import pytest
from sparse_recommender import SparseMatrix

@pytest.fixture
def empty_matrix():
    return SparseMatrix()

@pytest.fixture
def sample_matrix():
    matrix = SparseMatrix()
    matrix.set(0, 0, 1)
    matrix.set(1, 0, 2)
    matrix.set(1, 1, 3)
    return matrix

def test_set_get(empty_matrix):
    empty_matrix.set(0, 0, 1)
    empty_matrix.set(10, 10, 1)
    assert empty_matrix.get(0, 0) == 1
    assert empty_matrix.get(10, 10) == 1

def test_default_value(empty_matrix):
    assert empty_matrix.get(10, 10) == 0

def test_recommend(sample_matrix):
    vector_1 = [1, 2]
    result = sample_matrix.recommend(vector_1)
    assert result == [1, 8]
    vector_2 = [0, 1, 2]
    with pytest.raises(ValueError, match=r"Matrix Multiplication not possible as the number of rows of the vector does not match the number of columns of the matrix."):
        sample_matrix.recommend(vector_2)
    # assert str(pytest.get_cached_exception().value) == "Matrix Multiplication not possible as the number of rows of the vector does not match the number of columns of the matrix."
    # result = sample_matrix.recommend(vector_2)
    # assert result == "Matrix Multiplication not possible as the number of rows of the vector does not match the number of columns of the matrix."


def test_add_movie(sample_matrix):
    new_matrix = SparseMatrix()
    new_matrix.set(0, 0, 4)
    with pytest.raises(ValueError):
        result = sample_matrix.add_movie(new_matrix)
    # result = sample_matrix.add_movie(new_matrix)
    # assert result.get(0, 0) == 5
    # assert result.get(1, 0) == 2
    # assert result.get(1, 1) == 3

    new_matrix_1 = SparseMatrix()
    new_matrix_1.set(0, 0, 4)
    new_matrix_1.set(1, 1, 3)
    result = sample_matrix.add_movie(new_matrix_1)
    assert result.get(0, 0) == 5
    assert result.get(1, 0) == 2
    assert result.get(1, 1) == 6

def test_to_dense(sample_matrix):
    dense_matrix = sample_matrix.to_dense()
    assert dense_matrix == [[1, 0], [2, 3]]
