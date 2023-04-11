char nextGreatestLetter(char* letters, int lettersSize, char target){
    int left = 0, right = lettersSize - 1;
    while (left < right){
        int mid = left + (right-left) / 2;
        if (letters[mid] <= target)
            left = mid + 1;
        else
            right = mid;
    }
    return (letters[right] > target) ? letters[right] : letters[0];
}