import instaloader
mod=instaloader.Instaloader()
user=input("name:")
mod.download_profile(user, profile_pic_only=True)
