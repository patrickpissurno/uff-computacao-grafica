window.animation = {
    loop: false,
    keyframes: [
        {
            matrix: [
                [ 1, 0, 0, 0 ],
                [ 0, 1, 0, 0 ],
                [ 0, 0, 1, 0 ],
                [ 0, 0, 0, 1 ],
            ],
            duration: 1000 * 2
        },
        {
            matrix: [
                [ 1, 0, 0, 0 ],
                [ 0, 1, 0, 0 ],
                [ 0, 0, 1, 0 ],
                [ 2, 0, 0, 1 ],
            ],
            duration: 1000 * 2
        },
        {
            matrix: [
                [ 1, 0, 0, 0 ],
                [ 0, 1, 0, 0 ],
                [ 0, 0, 1, 0 ],
                [ 0, 0, 0, 1 ],
            ],
            duration: 1000 * 2
        },
        {
            matrix: [
                [ 1, 0, 0, 0 ],
                [ 0, 1, 0, 0 ],
                [ 0, 0, 1, 0 ],
                [ -2, 0, 0, 1 ],
            ],
            duration: 1000 * 2
        }
    ]
};