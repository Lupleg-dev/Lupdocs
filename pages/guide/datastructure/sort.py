def bubble_sort(data):
    for i in range(len(data)):
        for j in range(len(data) - 1, i, -1):
            if data[j] < data[j - 1]:
                data[j], data[j - 1] = data[j - 1], data[j]
    return data