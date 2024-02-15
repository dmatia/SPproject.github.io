console.log('cargue');

function loadLyrics(){
    loadLyric("the path");
    changeSpotify("the path");
    songPalette("the_path");
    const lis = document.querySelectorAll('#tracklist li');
    lis[0].classList.add('song_selected');
}

const tracklist = document.getElementById('tracklist');

tracklist.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const lis = document.querySelectorAll('#tracklist li');
        lis.forEach(li => li.classList.remove('song_selected'));
        event.target.classList.add('song_selected');
        const song = event.target.innerText;
        loadLyric(song);
        changeSpotify(song);
        songPalette(song);
        console.log("hice click en un li");
    }
});

function loadLyric(song) {
    let lyric = '';
    switch (song.toLowerCase()) {
        case `the path`:
            lyric = the_path;
            break;
        case 'solar power':
            lyric = solar_power;
            break;
        case 'california':
            lyric = california;
            break;
        case 'stoned at the nail salon':
            lyric = stoned_at;
            break;
        case 'fallen fruit':
            lyric = fallen_fruit;
            break;
        case 'secrets from a girl (who’s seen it all)':
            lyric = secrets_from;
            break;
        case 'the man with the axe':
            lyric = the_man;
            break;
        case 'dominoes':
            lyric = dominoes;
            break;
        case 'big star':
            lyric = big_star;
            break;
        case 'leader of a new regime':
            lyric = leader_of;
            break;
        case 'mood ring':
            lyric = mood_ring;
            break;
        case 'oceanic feeling':
            lyric = oceanic_feeling;
            break;
        case 'helen of troy':
            lyric = helen_of;
            break;
        case 'hold no grudge':
            lyric = hold_no;
            break;
    }
    const songLyric = document.getElementById('song_lyric');
    songLyric.innerText = lyric;
}

function songPalette(song){
    console.log("SONG PALETTE");
    let backgroundColor = '';
    let fontColor = '';
    switch (song.toLowerCase()) {
        case 'the path':
        case 'fallen fruit': 
        case 'the man with the axe':
        case 'hold no grudge':
            backgroundColor = "#fffcec";
            fontColor = '#5B5476';
            break;
        case 'solar power':
        case 'helen of troy':
            backgroundColor = '#7BAEC6';
            fontColor = '#FFF6D1';
            break;
        case 'california': 
        case 'leader of a new regime': 
        case 'dominoes':
            backgroundColor = '#D6C3E9';
            fontColor = '#680663';
            break;
        case 'stoned at the nail salon':
        case 'mood ring':
            backgroundColor = '#E5E9C3';
            fontColor = '#369572';
            break;
        case 'secrets from a girl (who’s seen it all)':
        case 'oceanic feeling':
            backgroundColor = '#AD719B';
            fontColor = '#BFE2E3';
            break;
        case 'big star':
            backgroundColor = '#E9C8DF';
            fontColor = '#4C3456';
            break;
    }
    document.getElementById('song_lyric').style = `background-color: ${backgroundColor}; color: ${fontColor}`;
}

function changeSpotify(song){
    let divSpotify = document.getElementById("spotify");
    let src = '';
    switch (song.toLowerCase()) {
        case `the path`:
            src = "https://open.spotify.com/embed/track/7JqqIi2ktnsNkYdQhKSCrz?utm_source=generator";
            break;
        case 'solar power':
            src="https://open.spotify.com/embed/track/7s2kWabRM60W9I61HpKg8C?utm_source=generator"
            break;
        case 'california':
            src="https://open.spotify.com/embed/track/4TYPnvjBbEfcDkk1UxpvYB?utm_source=generator"
            break;
        case 'stoned at the nail salon':
            src="https://open.spotify.com/embed/track/4ybZVtJKFoF9w7R1O5WooS?utm_source=generator"
            break;
        case 'fallen fruit':
            src="https://open.spotify.com/embed/track/5iUnomffoLeQsdlY2k5TDU?utm_source=generator"
            break;
        case 'secrets from a girl (who’s seen it all)':
            src="https://open.spotify.com/embed/track/1toRu029yjgrleWg2w3gNU?utm_source=generator"
            break;
        case 'the man with the axe':
            src="https://open.spotify.com/embed/track/2mP9lPo7pv9k2HTVutEisM?utm_source=generator"
            break;
        case 'dominoes':
            src="https://open.spotify.com/embed/track/78Sn3YMeqUgJBoe6zt940Z?utm_source=generator"
            break;
        case 'big star':
            src="https://open.spotify.com/embed/track/2qWVIatUtl2xMCHEvn4j7j?utm_source=generator"
            break;
        case 'leader of a new regime':
            src="https://open.spotify.com/embed/track/6vLf0MjsXzrr3WIOWK9N9j?utm_source=generator"
            break;
        case 'mood ring':
            src="https://open.spotify.com/embed/track/7rb4dcBfW0m1LQQcDCh4Hv?utm_source=generator"
            break;
        case 'oceanic feeling':
            src="https://open.spotify.com/embed/track/6kj8TeHSns33wt1Z1wdmMx?utm_source=generator"
            break;
        case 'helen of troy':
            src="https://open.spotify.com/embed/track/5luI0qmsWNYRRTJCWn8rcb?utm_source=generator"
            break;
        case 'hold no grudge':
            src="https://open.spotify.com/embed/track/188rKyWMsC4WsKKZ85lnUO?utm_source=generator"
            break;
    }
    divSpotify.innerHTML = `
    <iframe style="border-radius:12px; " 
            src=${src} 
            width="70%" height="80" frameBorder="0" 
            allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
     `;
}











// SONG LYRICS;
let the_path = `

Born in the year of OxyContin
Raised in the tall grass
Teen millionaire having nightmares from the camera flash
Now I'm alone on a windswept island
Caught in the complex divorce of the seasons
Won't take the call if it's the label or the radio

Arm in a cast at the museum gala
Fork in my purse to take home to my mother
Supermodels all dancing 'round a pharaoh's tomb

Now if you're looking for a savior, well that's not me
You need someone to take your pain for you?
Well, that's not me
'Cause we're all broken and sad
Where are the dreams that we had?
Can't find the dreams that we had

Let's hope the sun will show us the path

I just hope the sun will show us the path


`;
let solar_power = `

I hate the winter, Can't stand the cold
I tend to cancel all the plans(So sorry, I can't make it)
But when the heat comes Something takes a hold
Can I kick it?
 
Yeah, I can

My cheeks in high color, overripe peaches
No shirt, no shoes, only my features
My boy behind me, he's taking pictures
Lead the boys and girls onto the beaches
Come one, come all, I'll tell you my secrets
I'm kinda like a prettier Jesus

Forget all of the tears That you've cried... It's over
It's a new state of mind

...Are you coming, my baby?

Acid green, Aquamarine
The girls are dancing In the sand
And I throw my cellular device In the water
Can you reach me?

No, you can't (ha!)

My cheeks in high color, overripe peaches
No shirt, no shoes, only my features
My boy behind me, he's taking pictures (He's taking pictures)
Lead the boys and girls onto the beaches
Come one, come all, I'll tell you my secrets
I'm kinda like a prettier Jesus

Turn it on In a new kind of bright
It's solar 

Come on and let the bliss begin
Blink three times when you feel it kickin' in

That solar-olar 
solar power


`;
let california = `

Once upon a time in Hollywood when Carole called my name
I stood up, the room exploded and I knew that's it, I'll never be the same
That's when the doors swung open and a voice said, "We're glad you came"
Now I've spent thousands on you darling, all the hotels and the jets
And I'd pay it all again to have your golden body back in my bed
But I don't miss the poison arrows aimed directly at my head

Goodbye to all the bottles
All the models
Bye to the clouds in the skies that all hold no rain

(Don't want that California love)
(Don't want that California love)
(Don't want that California love)

Once upon a time the Canyon Store was where my world began
All that mystery and beauty gleaned from desert flowers and gifted children
But it got hard to grow up with your cool hand around my neck
Now in my hometown, sunbathing
My girlfriends, and my baby
But every time I smell tequila, the garden grows up in my mind again

Goodbye to all the bottles
All the models
Bye to the kids in the lines for the new Supreme

(Don't want that California love)
(Don't want that California love)
(Don't want that California love)
(Don't want that California love)
(Don't want that California love)
(Don't want that California love)

It's just a dream
It's just a dream
It's all just a dream
I wanna wake up, I wanna wake up


`;
let stoned_at = `

Got a wishbone drying on the windowsill in my kitchen
Just in case I wake up and realise I've chosen wrong
I love this life that I have, The vine hanging over the door
And the dog who comes when I call
But I wonder sometimes what I'm missing...

Well, my hot blood's been burning for so many summers now
It's time to cool it down
Wherever that leads

'Cause all the beautiful girls, they will fade like the roses
And all the times, they will change, it'll all come around
I don't know ...Maybe I'm just stoned at the nail salon


Got a memory of waiting in your bed wearing only my earrings
We'd go dancing all over the landmines under our town
But the sun has to rise
When it does, we'll divide up the papers
Two former hell-raisers
I'm still crazy for you, babe

Well, my hot blood's been burning for so many summers now
It's time to cool it down
Wherever that leads

'Cause all the music you loved at sixteen, you'll grow out of
And all the times, they will change, it'll all come around
I don't know... Maybe I'm just...

Maybe I'm just stoned at the nail salon again

Oh, make it good...
Oh, make it good...
I'd ride and I'd ride on the carousel
'Round and 'round forever if I could
But it's time to cool it down

Whatever that means...

Spend all the evenings you can with the people who raised you
'Cause all the times they will change, it'll all come around
I don't know
Maybe I'm just stoned at the nail salon
Maybe I'm just stoned at the nail salon again


`;
let fallen_fruit = `

To the ones who came before us
All the golden ones who were lifted on a wing
We had no idea the dreams we had were far too big
Far too big

And we will walk together (We will walk)
Psychedelic garlands in our hair
Through the halls of splendour where the apple trees all grew
You'll leave us dancing on the fallen fruit

From the Nissan 
to the Phantom 
to the plane
We'll disappear in the cover of the rain

Took the great minds and the vapers
And a pocketful of seed
It's time for us to leave

And we will walk together (We will walk)
Psychedelic garlands in our hair
But how can I love what I know I am gonna lose?
Don't make me choose


`;
let secrets_from = `

Dancing with my girls, only having two drinks then leaving
It's a funny thing, thought you'd never gain self-control
Guess it's been a while since you last said sorry
Crying in the dark at your best friends' parties
You've had enough, gotta turn the lights up, go home

Couldn't wait to turn fifteen
Then you blink and it's been ten years
Growing up a little at a time then all at once
Everybody wants the best for you
But you gotta want it for yourself, My love

You can take 'em if you want 'em, these are just
Secrets from a girl who's seen it all

'Member all the hurt you would feel when you weren't desired? (Doing anything for more touch)
'Member what you thought was grief before you got the call?
Baby girl, no one's gonna feel the pain for you
You're gonna love again, so just try staying open
And when the time comes, you'll fall
Yeah, when the time comes, you'll fall

Your dreams and inner visions, all your mystical ambitions
They won't let you down
Do your best to trust all the rays of light
Everybody wants the best for you
But you gotta want it for yourself, my love

Couldn't wait to turn fifteen, then you just go...

Secrets from a girl, who's seen it all
Secrets from a girl, who's seen it
Secrets from a girl
Secrets from a girl, who's seen it
Secrets from a girl (Secrets from a girl)
Secrets from a girl, who's seen it all

Welcome to Sadness
The temperature is unbearable until you face it
Thank you for flying with Strange Airlines
I will be your tour guide today
Your emotional baggage can be picked up at Carousel Number 2
Please be careful so that it doesn't fall onto someone you love
When we've reached your final destination, I will leave you to it
You'll be fine
I'm just gonna show you in, and um you can stay as long as you need to get familiar with the feeling
And then when you're ready, I'll be outside
and we can go look at the sunrise by euphoria mixed with existential vertigo?

Cool...


`;
let the_man = `


If I had to break it down, I'd say it's the way you love to dance
Moving the furniture when my back is turned
The flick of the lights and the world falls away
And your office job, and your silver hair
But our shapes in the dark are the reason I've stayed for all these years

I thought I was a genius
But now I'm twenty-two
And it's starting to feel like all I know how to do is
Put on a suit and take it away
With my fistful of tunes that it's painful to play
Fingernail worlds, like favourite seashells
They fill up my nights and then they float away

I've got hundreds of gowns, I've got paintings in frames
And a throat that fills with panic every festival day
Dutifully falling apart for the Princess of Norway

But you with your doll's lashes, your infinite T-shirts
I should've known when your favourite record was the same as my father's you'd take me down

I guess I'll always be this way
Swallowed up by the words and halfway to space
But there by the fire, you offered your hand
And as I took it, I loved you, the boy with the plan

You felled me clean as a pine
The man with the axe
And the look in his eyes

We've been through so many hard times, I'm writing a love song
For you, baby


`;
let dominoes = `

I heard that you were doing yoga With Uma Thurman's mother Just outside of Woodstock
Now you're watering all the flowers You planted with your new girlfriend
Outside on the rooftop

Just another phase you're rushing on through
Go all New Age, outrunning your blues

Fifty gleaming chances in a row
Then I watch you flick them down like dominoes
Must feel good being Mr. Start-Again

I know
Know a girl who knows a
Another girl who knows 
the woman that you hurt
It's strange to see you smoking marijuana
You used to do the most cocaine Of anyone I'd ever met

Just another phase you're shooting on through
The whole world changes right around you

You get fifty gleaming chances in a row
And I watch you flick them down like dominoes
Must feel good being Mr. Start-Again

Yeah, it must feel good being Mr. Start-Again

Don't get up

Yeah, it must feel good being Mr. Start-Again


`;
let big_star = `

Everyone knows that you're too good for me, don't they?
I'm a cheater, I lie, and I'm shy
But you like to say hello to total strangers
Shivering pines and walls of colour
I can't believe I used to stay inside

But every perfect summer's gotta say goodnight
Now I watch you run through the amber light
I used to love the party, now I'm not alright
Drinking in the dark, take me home tonight

Baby, you're a big star
You're a big star
Wanna take your picture

I toss up if it's worth it now every time I get on a plane
I've got so much to tell you and not enough time to do it in

But every perfect summer's gotta take its flight
I'll still watch you run through the winter light
I used to love the party, now I'm not alright
Hope the honeybees make it home tonight

Baby, you're a big star
You're a big star
Wanna take your picture

'Til I die
'Til I die
'Til I die


`;
let leader_of = `

Wearing SPF 3000 for the ultraviolet rays
Made it to the island on the last of the outbound planes 
Got a trunk full of Simone and Céline, and of course, my magazines
I'm gonna live out my days

Won't somebody, anybody, be the leader of a new regime?
Free the keepers of the burnt-out scene another day
Lust and paranoia reign supreme
We need the leader of a new regime


`;
let mood_ring = `

I'm tryna blow bubbles, but inside
Can't seem to fix my mood
Today it's as dark as my roots
If I, if I ever let them grow out 
Now all of my oceans have riptides
Can't seem to find what's wrong
The whole world is letting me down
Don't you think the early 2000s seem so far away? 

Ladies, begin your sun salutations
Transcendental in your meditations (Love and light)
You can burn sage, and I'll cleanse the crystals
We can get high, but only if the wind blows (Blows just right)

I can't feel a thing
I keep looking at my mood ring
Tell me how I'm feeling
Floating away, floating away

I'm tryna get well from the inside
Plants and celebrity news, all the vitamins I consume
Let's fly somewhere eastern, they'll have what I need (They'll have what I need)
Let's go

Ladies, begin your sun salutations
Pluto in Scorpio generation (Love and light)
You can burn sage, and I'll cleanse the crystals
We can get high, but only if the wind blows (Blows just right, ri-ri-ri-right)

I can't feel a thing
I keep looking at my mood ring
Tell me how I'm feeling
Floating away, floating away
All the sad girls sing
We'll keep dancing 'til the mood rings
Tell us how we're feeling
Floating away, floating away

Take me to some kinda
Take me to some kinda
Take me to some kinda place (Anywhere)
Watch the sun set, look back on my life (Take me to some kinda)
I just wanna know, will it be alright? (Take me to some kinda)
Take me to some kinda place (Anywhere)


`;
let oceanic_feeling = `


It's a blue day     We could jump Bulli
When I hit that water
When it holds me
I think about my father
Doin' the same thing
When he was a boy
When he was a boy
It's a blue day
We could go fishing
You'll catch the big one

Slidin' the knife under the skin
Grateful for this offering
And all the livin' things under the sun
Under the sun

Little brother, I think you're an angel
I see your silver chain levitate
When you're kick-flipping
Baby boy, you're super cool
I know you're scared, so was I
But all will be revealed in time (Time, time)

Oh, look, the rays are in the bay now
Can you hear the waves and the cicadas all around?
I can make anything real
Brain so hot, it's a summer body
Every day is blue and never cloudy
Don't look down
I can make anything real

In the future
If I have a daughter
Will she have my waist
Or my widow's peak?
My dreamer's disposition or my wicked streak?

Will she split a tab with her lover?
And laugh at the stars like her mother
When she was a girl?
When she was a girl?

Now the cherry-black lipstick's gathering dust in a drawer
I don't need her anymore
'Cause I got this power
I just had to breathe (Breathe out, breathe out, breathe out, breathe out)
And tune in (Tune in, tune in, tune in, tune in)
I just had to breathe (Breathe out, breathe out, breathe out, breathe out)
And tune in (Tune in, tune in, tune in, tune in)
I just had to breathe
And tune in
I just had to breathe
And tune in
I just had to breathe

Oh, was enlightenment found?
No, but I'm tryin', takin' it one year at a time
Oh, oh, can you hear the sound?
It's shimmerin' higher
On the beach, I'm buildin' a pyre
(Use the wood brought in by the tide)
I know you'll show me how, I'll know when it's time
To take off my robes and step into the choir


`;
let helen_of = `

You've heard it all before:
One minute, I was killing 'em all
And the next, a brown suit wouldn't let me perform ...Typical
So I took a happy face
And it's coming on like a charm
I don't wanna get lost, I wanna worship the sun

If you want, you can come

I'm in my own little golden age
But it's such a pill when they don't appreciate

So when you smoke that cigarette
Or when you talk shit 'bout an old friend
I know it's hard, but do your best
Give yourself a break, have a little faith

Let's hear it for the girls
Living in the modern world

They're banging on the door
"Everyone please make way For the girl who looks like she flew in from outer space Yesterday"
I think I'll wait it out

My little thing is keeping 'em keen

They could be drinking with you, 
                                    but they'll be looking at me

This whole time, I've been playing it coy
The city's falling for me just like I'm Helen of Troy

So when you're broke, can't get ahead
Or when you take it out on your boyfriend
I know it's hard, but do your best
Give yourself a break, have a little faith
Let's hear it for the girls
Living in the modern world

Give yourself a break, have a little faith

Let's hear it for the girls
Living in the modern world


`;
let hold_no = `

Remember when we used to sing, baby, up in your room before your mother got home?
There was a sound to our innocence
Our voices were lovers in the same bed
Now I'm not sure how they would sound, isn't that sad?

Now that the ocean's all waves and the diamonds are blood
There's a new girl on your song. I didn't know that I could be replaced...

Years ago, I tried to get a message to you
But I never heard back, I never heard back...

Where did we go wrong?
Our haven was always in the song
But just when I go to close the gates permanently
I realise that it isn't me

No, I don't keep a list, can't hold a grudge
Don't you think that we both might've done some growing up?
Well, I know that some shit was said and done
But it's such a different world now, I can't hate anyone

Remember when we woke at dawn
Saw the silver sun in your old Citroën?
And remember when we took them on?
Stoners on the run, How the West Was Won

Remember when we used to swim, baby, no one around
Take off all our clothes?
And in the clear cold, we were born again
I used to count down to your birthday
Now I'm not sure if it's June or July, isn't that sad?

Where did we go wrong?
Our haven was always in the song
But just when I go to close the gates permanently
I realise that it isn't me

No, I don't keep a list, can't hold a grudge (Hold no grudge)
Don't you think that we both might've done some growing up?
Yeah, I know that some shit was said and done (Said and done)
But it's such a different world now, I can't hate anyone

Remember when we woke at dawn
Saw the silver sun in your old Citroën?
And remember when we took them on?
Stoners on the run, How the West Was Won

Acting my age, not my horoscope
Guess that's growing up
Now I'm sending you love and wishing you well

Wherever you are


`;

