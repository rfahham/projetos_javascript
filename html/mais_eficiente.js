async function fetchName(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Lucas Garcez');
        }, 500);
    })
}

async function fetchEmail(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('lucas@coofstack.com');
        }, 500);
    });
}

export async function fetchInformation() {
    console.time('time');
    const name = await fetchName();
    const email = await fetchEmail();

    console.log(
        {
            name,
            email,
        }
    );
    console.timeEnd('time');
}

fetchInformation();