import AvatarImage from './avatar-image/avatar-image.tsx';
import Counter from './counter/counter.tsx';
import SignInButton from './sign-in-button/sign-in-button.tsx';
import SignOutButton from './sign-out-button/sign-out-button.tsx';
import Email from './email/email.tsx';
import ProfileData from './profile-data/profile-data.tsx';
import { memo } from 'react';

const MemorizedAvatarImage = memo(AvatarImage);
const MemorizedCounter = memo(Counter);
const MemorizedSignInButton = memo(SignInButton);
const MemorizedSignOutButton = memo(SignOutButton);
const MemorizedEmail = memo(Email);
const MemorizedProfileData = memo(ProfileData);

export {
  MemorizedAvatarImage as AvatarImage,
  MemorizedCounter as Counter,
  MemorizedSignInButton as SignInButton,
  MemorizedSignOutButton as SignOutButton,
  MemorizedEmail as Email,
  MemorizedProfileData as ProfileData,
};
