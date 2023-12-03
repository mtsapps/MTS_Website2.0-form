#include <iostream>
using namespace std; 
int main() {
    int rows, cols;
    

 
    cout << "Enter the number of rows: ";
    cin >> rows;

    cout << "Enter the number of columns: ";
    cin >> cols;


    int matrix[100][100];

  
    cout << "Enter the matrix elements:" << endl;
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            cout << "Enter element at position (" << i + 1 << ", " << j + 1 << "): ";
            cin >> matrix[i][j];
        }
    }

   
    int transpose[100][100];
    for (int i = 0; i < cols; ++i) {
        for (int j = 0; j < rows; ++j) {
            transpose[i][j] = matrix[j][i];
        }
    }

   
    cout << "\nOriginal Matrix:\n";
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

  
    cout << "\nTransposed Matrix:\n";
    for (int i = 0; i < cols; ++i) {
        for (int j = 0; j < rows; ++j) {
            cout << transpose[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
