import "./styles.css";
import video1 from "../../assets/v0/v1.mp4";
import video2 from "../../assets/v0/v2.mp4";
import video3 from "../../assets/v0/v3.mp4";
import video4 from "../../assets/v0/v4.mp4";
import video5 from "../../assets/v0/v5.mp4";
import video6 from "../../assets/v0/v6.mp4";
import video7 from "../../assets/v0/v7.mp4";
import video8 from "../../assets/v0/v8.mp4";
import video9 from "../../assets/v0/v9.mp4";
import video10 from "../../assets/v0/v10.mp4";
import video11 from "../../assets/v0/v11.mp4";
import video12 from "../../assets/v0/v12.mp4";
import video13 from "../../assets/v0/v13.mp4";

import React from "react";
import {motion} from "framer-motion";
import quantumComputerPic from '../../assets/google sycamore quantum computing chip.png'

export function Research() {
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 1500)

        return () => clearTimeout(timeout)

    }, [show])

    if (!show) return null

    return (<>
        <article>
            <section>
                <h2>Introduction</h2>

                <p>
                    Encryption is a vital tool that is used to secure information and protect the privacy of individuals
                    and organizations. For many years, encryption has been a reliable way to safeguard sensitive data
                    from malicious attacks. However, with the development of quantum computers, this security is under
                    threat. </p>
                <p>
                    Quantum computers are an emerging technology that has the potential to revolutionize the way we
                    process and store data. They use quantum bits, known as qubits, to perform computations that are
                    exponentially faster than classical computers. While quantum computers can bring about benefits,
                    they also pose a significant threat to the current encryption methods that protect our digital
                    world. </p>
                <motion.img
                    initial={{opacity: 0}}
                    whileInView={{y: [200, 0], opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                        type: "spring", stiffness: 50,
                    }}
                    loading={'lazy'} src={quantumComputerPic} alt={"quantum computer"}/>
                <p>
                    We will first discuss the current state of encryption and how it works. We will then explore how
                    quantum computers work and the potential threat they pose to current encryption methods.
                    Specifically, we will examine how they can use their powerful computing capabilities to break the
                    current encryption standards that are used to secure internet communications.
                </p>
                <p>
                    We will also discuss potential solutions to the issue at hand. One promising approach is the use of
                    lattice-based encryption methods, which are designed to be resistant to attacks from quantum
                    computers.
                </p>


            </section>
            <section>
                <h2>Current Encryption</h2>
                <p>
                    One of the most widespread encryption is using symmetric key encryption. It is a type of encryption
                    where the same key is used to both encrypt and decrypt data. The encryption process involves
                    applying an algorithm to the plaintext message using a secret key, which produces a ciphertext that
                    is unintelligible without the corresponding key.
                </p>
                <p>
                    When the encrypted message is received, the recipient uses the same key to decrypt the message back
                    into its original plaintext form. While symmetric key encryption is fast and efficient, it suffers
                    from a major weakness: the need to share the secret key securely between the sender and receiver.
                </p>
                <video autoPlay playsInline muted loop src={video1} width="750" height="500"></video>

                <p>If an attacker intercepts the key during transmission, they can use it to decrypt the encrypted data.
                    To address this problem, asymmetric key encryption, also known as public key encryption, was
                    developed. There is no need to share the secret key between the sender and receiver.</p>
                <p>
                    The RSA approach, which is predicated on the difficulty of factoring huge integers into their prime
                    factors, is the current standard for encryption on the internet. Each individual has two very large
                    prime numbers of their own that they keep private. They add these figures together to produce a
                    larger total, which they then make available to the general public.
                </p>
                <p>
                    To send someone a private message, we use their large public number and encrypt my message with it.
                    We encrypt the message in a way that makes it hard to recover without knowing the two prime
                    components that formed it.
                </p>
                <video autoPlay playsInline muted loop src={video2} width="750" height="500"></video>

                <p>
                    A supercomputer could be used to factor it using the General Number Field Sieve, the best-known
                    factoring procedure, but modern cryptography employs prime numbers that are about 300 digits long.
                    Even on a supercomputer, factoring a product of two primes this large would take roughly:


                </p>

                <motion.p
                    className={'big-number'}
                    initial={{opacity: 0}}
                    whileInView={{y: [500, 0], opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{type: "spring", duration: 0, stiffness: 50,}}>
                    16,000,000 years
                </motion.p>

                <p>
                    but not on a quantum computer.
                </p>
            </section>
            <section>


                <h2>Quantum Computing</h2>
                <p>
                    Traditional computers, also known as classical computers, operate on a binary system where
                    information is processed and stored using bits that can only be in one of two states, 0 or 1. In
                    other words, if you had two bits, you could have them in one of four states: 00, 01, 10, or 11.
                    Let's assume that each of these states corresponds to a number, such as 0, 1, 2, or 3. We can only
                    do it for one state at a time.
                </p>
                <video autoPlay playsInline muted loop src={video3} width="750" height="500"></video>

                <p>
                    Quantum computers, on the other hand, use quantum bits, or qubits, which can exist in multiple
                    states simultaneously. This is known as superposition Thus, two qubits can coexist in a
                    superposition of 0, 1, 2, and 3 at the same time. Superposition allows quantum computers to perform
                    calculations much faster than classical computers.
                </p>
                <video autoPlay playsInline muted loop src={video4} width="750" height="500"></video>

                <p>The number of potential states doubles if we include an additional qubit. We can therefore represent
                    eight states with three qubits and carry out eight calculations simultaneously.</p>
                <video autoPlay playsInline muted loop src={video5} width="750" height="500"></video>

                <p>
                    Due to these distinctions, quantum computers have the ability to solve complicated problems that are
                    difficult or impractical for classical computers to accomplish, such breaking encryption schemes
                    that depend on the challenge of factoring big numbers or solving complex optimization issues.
                </p>


            </section>
            <section>

                <h2>Breaking Encryption</h2>
                <p>
                    How, then, does a quantum computer factor the product of two primes much more quickly than a
                    traditional computer does?
                </p>
                <p>

                    A quantum computer can break encryption by using an algorithm called Shor's algorithm, which can
                    quickly factor large numbers. Because RSA algorithm, rely on the difficulty of factoring large
                    numbers. Let's imagine we have a number N that is the result of multiplying two prime numbers, p and
                    q. So, if you want to discover the prime factors p and q of a number N, start by guessing, g.
                </p>
                <video autoPlay playsInline muted loop src={video6} width="750" height="500"></video>

                <p>
                    Second, find out how many times r you have to multiply g by itself to reach one more than a multiple
                    of N. Third, use that exponent to calculate two new numbers that probably do share factors with N.
                    And finally use Euclid's algorithm to find the shared factors between those numbers and N, which
                    should give you p and q. </p>
                <video autoPlay playsInline muted loop src={video7} width="750" height="500"></video>

                <p>Step two is the crucial step that a quantum computer accelerates. This would only require a few
                    thousand perfect qubits, but since our current qubits aren't perfect, we need more of them to serve
                    as redundant information.</p>

                <p>
                    A billion physical qubits were thought to be required to decrypt data using RSA encryption in 2012.
                    And when further technological advances have been made, that number has been drastically reduced to
                    just 20 million physical qubits.
                </p>

                <video autoPlay playsInline muted loop src={video8} width="750" height="500"></video>
                <p>
                    How many qubits exist now, then? Although we are far from having that many qubits, the rate of
                    advancement appears to be exponential if we look at the state of quantum computers. So, the only
                    thing left to determine is when these two curves will meet before all of our current public key
                    encryption can be cracked.
                </p>
            </section>
            <section>

                <h2>The Suggested Solution</h2>
                <p>
                    There are many new ways to encrypt data, which can withstand attacks from both normal and quantum
                    computers. We will descuss the ones that are based on the mathematics of latices

                </p>
                <p>
                    We can representing latices in 2D plane by achieving two different points by multiplying two
                    vectors, r1 and r2, by different integer multiples, such as three times r1 and one times r2, and all
                    the points you may reach by doing this are collectively referred to as a lattice.
                </p>
                <video autoPlay playsInline muted loop src={video9} width="750" height="500"></video>

                <p>
                    To find the lattice point closest to C, we need to find a combination of two vectors, r1 and r2,
                    that will lead us to that point. This process is typically done using a technique called basis
                    reduction, which involves transforming the lattice basis to make it more efficient for solving
                    problems.
                </p>
                <p>

                    Once we have the basis vectors, we can use them to find the lattice point closest to C by adding a
                    combination of r1 and r2 to C. Finding the right combination of r1 and r2 can be done by moving
                    twice in the positive direction of r1 and twice in the negative direction of r2, as this will lead
                    us to the closest lattice point.
                </p>

                <video autoPlay playsInline muted loop src={video10} width="750" height="500"></video>

                <p>
                    However, it's important to note that r1 and r2 are not the only vectors that can lead us to the
                    closest lattice point. There may be other combinations of vectors that can achieve the same result.
                    This is why basis reduction is important, as it helps us find the most efficient basis vectors for
                    solving problems and generating encryption keys.
                </p>

                <video autoPlay playsInline muted loop src={video11} width="750" height="500"></video>


                <p>
                    However, if we increase the dimension to three, this immediately becomes much more challenging,
                    particularly since you are not provided the collection of all lattice points. Only the vectors that
                    make up the object are provided. In order to confirm that the lattice point you find is truly the
                    closest to the goal, you must still find all the other lattice points nearby.

                </p>
                <video autoPlay playsInline muted loop src={video12} width="750" height="500"></video>

                <p>It is clear that as the number of dimensions grows, so do the lattice points. We'll use close to a
                    thousand dimensions in the anticipated future encryption techniques. Even the most powerful
                    computers struggle to discover the closest point in a problem with that many dimensions unless they
                    are have a good set of vectors.
                </p>
                <video autoPlay playsInline muted loop src={video13} width="750" height="500"></video>
                <p>

                    This will be very challenging in a thousand dimensions unless you have an excellent set of vectors,
                    which the recipient has. Therefore, it is simple for the recipient who has good vectors, but
                    difficult for everyone else. This problem is believed to be very difficult to solve for both
                    classical and quantum computers.
                </p>

                <motion.p
                    className={'big-number'}
                    initial={{opacity: 0}}
                    whileInView={{y: [500, 0], opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{type: "spring", duration: 0, stiffness: 50,}}>
                    Thank You
                </motion.p>

            </section>


        </article>
    </>);
}
